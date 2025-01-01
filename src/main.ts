import "./style.css";
import {
	Color,
	CubeTextureLoader,
	HemisphereLight,
	Mesh,
	MeshStandardMaterial,
	SphereGeometry,
} from "three";
import { textures } from "./lancellotti-chapel";
import { setup } from "./setup.ts";

const { camera, renderer, scene } = setup();

scene.add(new HemisphereLight(0xfff, 0xfff, 4));

const texture = new CubeTextureLoader().load(textures);

const albedo = [
	{ name: "iron", color: new Color(0.56, 0.57, 0.58) },
	{ name: "silver", color: new Color(0.972, 0.96, 0.915) },
	{ name: "aluminum", color: new Color(0.913, 0.921, 0.925) },
	{ name: "gold", color: new Color(1.0, 0.766, 0.336) },
	{ name: "copper", color: new Color(0.955, 0.637, 0.538) },
	{ name: "chromium", color: new Color(0.55, 0.556, 0.554) },
	{ name: "nickel", color: new Color(0.66, 0.609, 0.526) },
	{ name: "titanium", color: new Color(0.542, 0.497, 0.449) },
	{ name: "cobalt", color: new Color(0.662, 0.655, 0.634) },
	{ name: "platinum", color: new Color(0.672, 0.637, 0.585) },
];

for (const [index, { color }] of Object.entries(albedo)) {
	const sphere = new Mesh(
		new SphereGeometry(0.4, 16, 16),
		new MeshStandardMaterial({
			color,
			roughness: 0,
			metalness: 1,
			envMap: texture,
		}),
	);
	sphere.position.set(Number(index), 0, 0);
	scene.add(sphere);
}

(function render() {
	requestAnimationFrame(render);
	camera.position.set(4.5, 0, 6);
	renderer.render(scene, camera);
})();
