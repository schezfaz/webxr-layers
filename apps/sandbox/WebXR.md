# WebXR - Nik Lever

- https is required (secure site) [OPENSSL](https://slproweb.com/products/Win32OpenSSL.html)

Three.js: WebGL Renderer (y-axis points up: EUS system | x(East) Y(Up) Z(South))

## Objects
- Defined using vertices
- Vertex: Vector Value
- Each vector has 3 values (x,y,z)
- in three.js Vector --> Vector3

**Object:** Vertices + Faces
**Cubes:** 8 vertices, 6 faces
**Normal:** vector3 property that stores the direction (usually of unit length)

**Face:** Material (colour, image mapping)

*UV MAPPING*: Vector2 value:
- Vector with 2 values:
  - U: how far left to right
  - V: up to down
Bottom left (0,0), top right (1,1)

## Shaders:
- Vertex Shader (converts all values to between -1 and 1)
- Fragment Shader (works at pixel level) - follows the vertex shader (i.e. it already has the vertices converted into clip based coordinates): calculates the pixel colour 

## Rendering Pipeline
Process of converting 3D data into 2D

## WebXR + Three.js
WebXR will generate viewer position and orientation, controller position and orientation and allow you to hit test on real world geometry. WebXR does not really render anything

Three.js makes WebGL (a low level API) easy to use. WebXRManager: Acts as a bridge between the three.js camera and the WebXR API
- JavaScript
- Module JS --> Three.js WebXR examples
- Typescript

## Components in Three.js
1. Scene (Objects + Lights)
2. Camera (Viewers position + Orientation in the scene)
3. Renderer (WebGLRenderer)

### Frustrum
3rd and 4th parameter while initialising a perspective camera: Near Plane, Far Plane: Object outside of these thresholds will be hidden/clipped

Virtual Cage to define clipping region (Frustrum)

Directional Light: Direction + Target

## Geometry
Mesh: Geometry + Material
- Geometry < BufferGeometry(better performance)

Geometry Classes: Primitives:
- box
- circle
- cone 
- cylinder
- dodecahedron
- icosahedron
- octahedron
- plane
- sphere
- tetrahedron
- torus
- torusknot

## Materials
MeshLambertMaterial: Calculates the value of the light at the apex and then interpolates it
Mesh: Made up of a lot of triangles, mesh builds up each triangle while being rendered 

## Loaders
www.free3D.com 
3D models: format: GLB (binary version of the glTL format)
gltf-viewer.donmccurdy.com