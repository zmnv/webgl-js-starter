#ifdef GL_ES
  precision highp float;
  #endif
  
  uniform vec4 uColor;
  uniform float uTime;
  uniform vec2 uPosition;
  
  #define PI 3.14159
  
  void main() {
    float v = uTime +uPosition.x / 100.;
    float k = .01;
    vec2 c = gl_FragCoord.xy * k - k/2.0;
    v += sin(c.x+uTime);
    v += sin((c.y+uTime)/2.0);
    v += sin((c.x+c.y+uTime)/2.0);
    c += k/2.0 * vec2(sin(uTime/3.0), cos(uTime/2.0));
    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+uTime+uPosition.y/100.);
    v = v/2.0;
    vec3 col = vec3(1, .5 + .5 * sin(PI*v), .5 + .5 * cos(PI*v));
    gl_FragColor = vec4(col, 1);
  }