import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export function setup() {
	const size = { width: 1252, height: 864 };
	const renderer = new WebGLRenderer({
		antialias: true,
		canvas: document.getElementById("app").querySelector("canvas"),
	});
	renderer.setSize(size.width, size.height);
	renderer.setClearColor(0xccc);

	const scene = new Scene();

	const camera = new PerspectiveCamera(60, size.width / size.height, 0.1, 100);
	camera.position.set(0, 0, 8);

	return { camera, renderer, scene, size };
}
