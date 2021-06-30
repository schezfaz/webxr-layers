import * as THREE from '../../libs/three/three.module.js';
import { VRButton } from '../../libs/three/jsm/VRButton.js';
import { XRControllerModelFactory } from '../../libs/three/jsm/XRControllerModelFactory.js';
import { BoxLineGeometry } from '../../libs/three/jsm/BoxLineGeometry.js';
import { Stats } from '../../libs/stats.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.clock = new THREE.Clock();

		/* Perspective Camera: Distance objects will appear smaller than closer objects */
		this.camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 100);
		this.camera.position.set(0,1.6, 3);

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x505050);

		/*add ambient light to the scene - illuminates (not based on location or position) 
			- different colour when pointing up/down, intensity = 0.3*/
		//const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.3);
		const ambient = new THREE.HemisphereLight(0x606060, 0x404040);
		this.scene.add(ambient);

		/* Points from its position to the origin */
		const light = new THREE.DirectionalLight(0xffffff);
		light.position.set( 1, 1, 1 ).normalize();
		this.scene.add(light);

		/*  Antialias: to prevent juggy edges in VR headsets*/
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.outputEncoding = THREE.sRGBEncoding;

		/*Geometry: START */
		// const geometry = new THREE.BoxBufferGeometry();
		// const material = new THREE.MeshStandardMaterial({
		// 	color: 0xff0000
		// });

		// /*Creates a box: since no params are passed it is 1 unit high, wide and deep*/
		// this.mesh = new THREE.Mesh(geometry, material);
		// this.scene.add(this.mesh);

	
		// /*Parameters: CircleBufferGeometry: Radius (default=1), No. of Segments, start angle (0: x axis as default), end angle (default: 2PI) */
		// const geometry2 = new THREE.CircleBufferGeometry(1,32, 0, Math.PI);
		// this.mesh2 = new THREE.Mesh(geometry2, material);
		// this.mesh2.position.set(3,0.5,0);
		// this.scene.add(this.mesh2);

		// /*Extrude Buffer Geometry: Takes a shape instance and extrudes it along the z axis: 
		//   2 Parameters: Shape + Settings object
		// */

		// /*Shape instance: Methods: draw a shape in the xy plane: 5 pointed star
		// 	- moveTo()
		// 	- lineTo()
		// */
		// const shape = new THREE.Shape();
		// const outerRadius = 0.8;
		// const innerRadius = 0.4;
		// const pi2 = Math.PI*2;
		// const inc = pi2/10; //angle to move by while drawing each line
		// shape.moveTo(outerRadius,0);
		
		// let inner = true;
		// for (let theta = inc; theta<pi2; theta+=inc){
		// 	const radius = (inner) ? innerRadius : outerRadius;
		// 	shape.lineTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
		// 	inner = !inner;
		// }

		// const extrudeSettings = {
		// 	steps: 1,
		// 	depth: 1,
		// 	bevelEnabled: false
		// }

		// const geometry3 = new THREE.ExtrudeGeometry(shape, extrudeSettings);
		// this.mesh3 = new THREE.Mesh(geometry3, material);
		// this.mesh3.position.set(-2,0.5,0);
		// this.scene.add(this.mesh3);
		
		/*GEOMETRY: END */

		container.appendChild(this.renderer.domElement);
		//this.renderer.setAnimationLoop(this.render.bind(this));

		//const controls = new OrbitControls(this.camera, this.renderer.domElement);

		/*Controls are per Module 3 Lesson 1 (3-1) */
		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.target.set(0, 1.6, 0);
        this.controls.update();

		this.stats = new Stats();
		container.appendChild(this.stats.dom);

		this.initScene();
		this.setupXR();

        window.addEventListener('resize', this.resize.bind(this) );
		this.renderer.setAnimationLoop(this.render.bind(this));
	}	
    
    resize(){
        this.camera.aspect = this.window.innerWidth/this.window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

	random(min,max){
		return Math.random() * (max-min) + min;
	}

	initScene(){
		this.radius = 0.8;
		this.room = new THREE.LineSegments(
			new BoxLineGeometry(6,6,6,10,10,10),
			new THREE.LineBasicMaterial({
				color: 0x808080
			})
		);
		this.room.geometry.translate(0,3,0);
		this.scene.add(this.room);

		
	}

	setupXR(){

	}
    
	render( ) {
		/*3-1 START */
		this.stats.update();
		/*3-1 END */

		/*Geometry Render: START */
		// this.mesh.rotateZ(0.01);
		// this.mesh.rotateY(0.01);
		// this.mesh2.rotateZ(0.01);
		// this.mesh2.rotateY(0.01);
		// this.mesh3.rotateZ(0.01);
		// this.mesh3.rotateY(0.01);
		/*Geometry Render: END */
        this.renderer.render(this.scene, this.camera);
    }
}


export default App;