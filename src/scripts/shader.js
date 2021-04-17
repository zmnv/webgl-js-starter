import waves from './waves.frag'
// import source from 'raw-loader!glslify-loader!./my-shader.glsl'

export function initializeShader() {

    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)

    const gl = canvas.getContext('webgl')

    function resize() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    resize()

    window.addEventListener('resize', resize)

    const mouse = { x: 0, y: 0 }

    document.body.addEventListener('pointermove', function (e) {
        mouse.x = e.pageX
        mouse.y = e.pageY
    })

    const vertexShaderSource = `attribute vec2 aVertexPosition;
  void main() {
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);
  }`

    var fragmentShaderSource = waves

    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertexShader, vertexShaderSource)
    gl.compileShader(vertexShader)

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragmentShader, fragmentShaderSource)
    gl.compileShader(fragmentShader)

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    const vertices = new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1])

    const vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const itemSize = 2
    const numItems = vertices.length / itemSize

    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition')
    gl.enableVertexAttribArray(program.aVertexPosition)
    gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0)

    gl.useProgram(program)

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

    function render() {
        gl.viewport(0, 0, canvas.width, canvas.height)
        gl.clearColor(1, 1, 1, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        program.uColor = gl.getUniformLocation(program, 'uColor')
        gl.uniform4fv(program.uColor, [0.0, 0.0, 0.0, 1.0])

        program.uPosition = gl.getUniformLocation(program, 'uPosition')
        gl.uniform2fv(program.uPosition, [mouse.x, mouse.y])

        program.uTime = gl.getUniformLocation(program, 'uTime')
        gl.uniform1f(program.uTime, 0.001 * performance.now())

        gl.drawArrays(gl.TRIANGLES, 0, numItems)

        requestAnimationFrame(render)
    }

    render();

}
