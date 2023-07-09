<template>
  <div class="absolute right-0 top-0">
    index: {{ index }}<br/>
    pointer: {{ pointer }}
  </div>
  <div class="w-full h-full | flex items-center justify-center"
       ref="renderArea">
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, watch} from "vue"
import * as THREE from "three"
import {Mesh, Points} from "three"
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass"
import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass"
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer"
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js'
import gsap from 'gsap'

const props = defineProps<{
  index: number
}>()

const renderArea = ref<HTMLDivElement>()

let animationID = 0

const width = ref(renderArea.value?.offsetWidth || 0)
const height = ref(renderArea.value?.offsetHeight || 0)

const renderer = ref()
const camera = ref()

const raycaster = ref()
const pointer = ref()

let composer

const setSize = () => {
  width.value = renderArea.value?.offsetWidth || 0
  height.value = renderArea.value?.offsetHeight || 0
}

onMounted(() => {
  setSize()
  init()

})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  cancelAnimationFrame(animationID)
})

const init = () => {
  renderer.value = new THREE.WebGLRenderer({antialias: false})
  renderer.value.setPixelRatio(window.devicePixelRatio)
  renderer.value.setSize(width.value, height.value)
  renderArea.value?.appendChild(renderer.value.domElement)

  const scene = new THREE.Scene()

  camera.value = new THREE.PerspectiveCamera(20, width.value / height.value, 1, 100)
  camera.value.position.set(0, 0, 3)
  scene.add(camera.value)

  const geometry = new THREE.TorusGeometry(1.2, .5, 12, 48)
  const material = new THREE.PointsMaterial({color: 'mediumvioletred', size: 0.05})
  const mesh = new THREE.Points(geometry, material)
  mesh.rotation.y = Math.PI * .5
  mesh.scale.set(.1, .1, .1)

  scene.add(mesh)

  const geometry2 = new THREE.TorusGeometry(.75, .5, 12, 32)
  const material2 = new THREE.PointsMaterial({color: 'darkviolet', size: 0.04})
  const mesh2 = new THREE.Points(geometry2, material2)
  mesh2.rotation.y = Math.PI * .5
  mesh2.scale.set(.1, .1, .1)

  scene.add(mesh2)

  const geometry3 = new THREE.SphereGeometry(.06, 20, 16)
  const material3 = new THREE.PointsMaterial({color: 'white', size: 0.01})
  const mesh3 = new THREE.Points(geometry3, material3)
  mesh3.rotation.z = Math.PI * .5
  scene.add(mesh3)

  const geometry4 = new THREE.CylinderGeometry(.0005, .0005, 4, 3, 3)
  const material4 = new THREE.MeshBasicMaterial({color: 'chocolate'})
  const mesh4 = new THREE.Mesh(geometry4, material4)
  mesh4.rotation.z = Math.PI * .5

  const group = new THREE.Group();
  group.add(mesh)
  group.add(mesh2)
  group.add(mesh3)
  group.add(mesh4)

  group.rotation.y = Math.PI * .5
  group.rotation.z = 0

  scene.add(group)

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width.value, height.value), .75, .8, .1)

  const outputPass = new OutputPass(THREE.ReinhardToneMapping)

  const renderScene = new RenderPass(scene, camera.value)

  composer = new EffectComposer(renderer.value, undefined)
  composer.addPass(renderScene)
  composer.addPass(bloomPass)
  composer.addPass(outputPass)

  const mixer = new THREE.AnimationMixer(mesh)

  const clock = new THREE.Clock()

  raycaster.value = new THREE.Raycaster()
  pointer.value = new THREE.Vector2()

  animate(clock, mixer, group, mesh, mesh2, mesh3, mesh4)

  const onWindowResize = () => {
    setSize()

    camera.value.aspect = width.value / height.value
    camera.value.updateProjectionMatrix()

    composer.setSize(width.value, height.value)
    renderer.value.setSize(width.value, height.value)
  }

  const onPointerMove = (event: PointerEvent) => {
    pointer.value.x = (event.layerX / (renderArea.value?.offsetWidth || 0)) * 2 - 1;
    pointer.value.y = -(event.layerY / (renderArea.value?.offsetHeight || 0)) * 2 + 1;

  }

  window.addEventListener('resize', onWindowResize, {passive: true})
  window.addEventListener('pointermove', onPointerMove);

  watch(() => props.index,
      (index) => {
        if (index === 1) {
          gsap.to(mesh.scale, {duration: 1, delay: 0, x: .1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, y: .1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, z: .1})

          gsap.to(mesh2.scale, {duration: 1, delay: 0, x: .2})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, y: .2})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, z: .2})

          gsap.to(group.rotation, {duration: 1, delay: 0, z: 0})
          gsap.to(group.rotation, {duration: 1, delay: 0, y: Math.PI * 0.5})

          animate(clock, mixer, group, mesh, mesh2, mesh3, mesh4)
        } else if (index === 2) {
          gsap.to(mesh.scale, {duration: 1, delay: 0, x: 1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, y: 1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, z: 1})

          gsap.to(mesh2.scale, {duration: 1, delay: 0, x: 1})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, y: 1})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, z: 1})

          gsap.to(group.rotation, {duration: 1, delay: 0, z: Math.PI * .2})
          gsap.to(group.rotation, {duration: 1, delay: 0, y: 0, x: 0})
        } else {
          gsap.to(mesh.scale, {duration: 1, delay: 0, x: .1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, y: .1})
          gsap.to(mesh.scale, {duration: 1, delay: 0, z: .1})

          gsap.to(mesh2.scale, {duration: 1, delay: 0, x: .2})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, y: .2})
          gsap.to(mesh2.scale, {duration: 1, delay: 0, z: .2})

          gsap.to(group.rotation, {duration: 1, delay: 0, z: 0})
          gsap.to(group.rotation, {duration: 1, delay: 0, y: Math.PI * 0.5})
        }
      }, {immediate: true})
}



const animate = (clock,
                 mixer,
                 group,
                 ...mesh: (Mesh | Points)[]) => {
  raycaster.value.setFromCamera(pointer.value, camera.value);

  mesh.forEach((mesh, index) => {
    if (index === 0)
      mesh.rotation.z = mesh.rotation.z + 0.001
    if (index === 1)
      mesh.rotation.z = mesh.rotation.z - 0.0005
    if (index === 2)
      mesh.rotation.x = mesh.rotation.x - 0.01

    const delta = clock.getDelta()

    mixer.update(delta)

    composer.render(delta)
  })

  animationID = requestAnimationFrame(() => animate(clock, mixer, group, ...mesh))
}
</script>

<style scoped>

</style>