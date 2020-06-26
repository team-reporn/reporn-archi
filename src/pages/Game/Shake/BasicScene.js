import React, { useState } from "react";

import { View, Text, Button, Image, Dimensions } from "react-native";
import { Accelerometer } from "expo-sensors";

import useSocket from "../../../App/Socket/useSocket";
import TitleWithContent from "../../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../../components/Paragraph/Paragraph";
import NextButton from "../../../components/btn/NextBtn.js";

import { GLView, Asset } from "expo-gl";

import Chrono from "../../../components/Chrono";
import Award from "./Award";
import Exploit from "./Exploit";

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

const vertSrc = `
  precision highp float;
  attribute vec2 position;
  varying vec2 uv;
  void main () {
    uv = position;
    gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
  }`;

const fragSrc = `
  precision highp float;
  uniform sampler2D texture;
  uniform float u_speed;
  varying vec2 uv;
  vec3 rgb2hsv(vec3 c)
  {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
      vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }
  vec3 hsv2rgb(vec3 c)
  {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  void main () {
    vec4 t = texture2D(texture, vec2(uv.x, uv.y)); 
    vec3 hsvT = rgb2hsv(t.rgb);
    vec3 augmentedHsvT = hsv2rgb(vec3(
      hsvT.r+u_speed/10.,
      hsvT.g+u_speed/10.,
      hsvT.b+u_speed/10.
      ));
    gl_FragColor = vec4( augmentedHsvT.r,  augmentedHsvT.g, augmentedHsvT.b, 1.);
  }`;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BasicScene extends React.Component {
  static meta = {
    description: "Basic Scene with Texture",
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      step: 0,
      ready: false,
      accelerometerData: { x: 0, y: 0, z: 0 },
      oldAccelerometerData: { x: 0, y: 0, z: 0 },
      speed: -0.9,
      highestSpeed: 0,
      locationX: 0,
      locationY: 0,
    };
    this.interval;
    console.log("\n cara \n\n cara \n\n cara \n\n cara \n ");
    this._subscribeToAccelerometer();
  }
  touchMoveHandler = (evt) => {
    this.setState({
      locationX: evt.nativeEvent.locationX,
      locationY: evt.nativeEvent.locationY,
    });
  };
  updateSpeed = (accelerometerData) => {
    this.setState(
      { oldAccelerometerData: this.state.accelerometerData },
      this.setState({ accelerometerData }, () => {
        let oldP =
          Math.abs(this.state.oldAccelerometerData.x) +
          Math.abs(this.state.oldAccelerometerData.z) +
          Math.abs(this.state.oldAccelerometerData.y);
        let newP =
          Math.abs(this.state.accelerometerData.x) +
          Math.abs(this.state.accelerometerData.y) +
          Math.abs(this.state.accelerometerData.z);
        let rep =
          Math.abs(newP - oldP) * 10 > 0.17
            ? this.state.speed + Math.abs(newP - oldP).clamp(0, 0.025)
            : this.state.speed - 0.02;
        this.setState({
          speed: rep.clamp(-0.9, 1),
          // this.state.speed + (newP - oldP) / 2 - 0.1 > 0
          //   ? this.state.speed + (newP - oldP) / 2 - 0.01
          //   : 0,
        });
        if (this.state.speed > this.state.highestSpeed) {
          this.setState({ highestSpeed: this.state.speed });
        }
        console.log(this.state.speed, Math.abs(newP - oldP) * 10);
      })
    );
  };
  _subscribeToAccelerometer = () => {
    if (this.props.character.cardRole.genre == "h") {
      this._accelerometerSubscription = Accelerometer.addListener(
        this.updateSpeed
      );
    } else {
      this.interval = setInterval(() => {
        let accelerometerData = {
          x: this.state.locationX / windowWidth,
          y: this.state.locationY / windowHeight,
          z: 0.5,
        };
        this.updateSpeed(accelerometerData);
      }, 100);
    }
  };
  _unsubscribeFromAccelerometer = () => {
    //this._accelerometerSubscription && this._acceleroMeterSubscription.remove();
    //this._accelerometerSubscription = null;
  };

  componentDidMount() {
    (async () => {
      this._textureAsset = Expo.Asset.fromModule(require("./Off.png"));
      if (this.props.character.cardRole.genre == "h") {
        this._textureAsset = Expo.Asset.fromModule(require("./Off.png"));
      } else if (this.props.character.cardRole.genre == "f") {
        this._textureAsset = Expo.Asset.fromModule(require("./OffCaresse.png"));
      } else {
      }
      await this._textureAsset.downloadAsync();
      this.setState({ ready: true });
    })();
  }

  render() {
    return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={this._onContextCreate}
        onTouchMove={(evt) => {
          if (this.props.character.cardRole.genre == "f") {
            this.touchMoveHandler(evt);
          }
        }}
      />
    );
  }

  _onContextCreate = (gl) => {
    gl.enableLogging = true;

    // Compile vertex and fragment shader
    const vert = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vert, vertSrc);
    gl.compileShader(vert);
    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(frag, fragSrc);
    gl.compileShader(frag);

    // Link together into a program
    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    // Save position attribute
    const positionAttrib = gl.getAttribLocation(program, "position");

    // Create buffer
    const buffer = gl.createBuffer();

    // Create texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    const dataToPass = (imagedata) =>
      imagedata &&
      typeof imagedata === "object" &&
      Object.keys(imagedata).length === 0
        ? null
        : imagedata;

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      128,
      128,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      dataToPass(this._textureAsset)
    );
    // 1, 1, 0,
    // gl.RGBA, gl.UNSIGNED_BYTE,
    // new Uint8Array([255, 0, 0, 255]));
    gl.uniform1i(gl.getUniformLocation(program, "texture"), 0);

    // var uAccelerometer = gl.getUniformLocation(program, "u_offset");
    var uSpeed = gl.getUniformLocation(program, "u_speed");

    /// Animate!
    let skip = false;
    const animate = () => {
      try {
        if (skip) {
          // return;
        }

        // Clear
        gl.clearColor(0, 0, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // Bind buffer, program and position attribute for use
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.useProgram(program);
        gl.enableVertexAttribArray(positionAttrib);
        gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);
        // gl.uniform3f(uAccelerometer, x, y, z); // offset it to the right half the screen
        gl.uniform1f(uSpeed, this.state.speed); // offset it to the right half the screen

        // Buffer data and draw!
        const verts = new Float32Array([-2, 0, 0, -2, 2, 2]);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, verts.length / 2);

        // Submit frame
        gl.flush();
        gl.endFrameEXP();
      } finally {
        skip = !skip;
        gl.enableLogging = false;
        requestAnimationFrame(animate);
      }
    };
    animate();
  };
}
export default BasicScene;
