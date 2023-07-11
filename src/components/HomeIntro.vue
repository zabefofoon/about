<template>
  <div class="w-full h-full | flex items-center justify-center"
       ref="renderArea">
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue"
import * as THREE from "three"

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

const init = () => {
  renderer.value = new THREE.WebGLRenderer({antialias: true})
  renderer.value.shadowMap.enabled = true;
  renderer.value.setPixelRatio(window.devicePixelRatio)
  renderer.value.setSize(width.value, height.value)
  renderArea.value?.appendChild(renderer.value.domElement)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('rgb(88, 28, 135)')

  camera.value = new THREE.PerspectiveCamera(70, width.value / height.value)
  camera.value.position.z = 50
  scene.add(camera.value)

  const light = new THREE.PointLight(0xffffff, 5, 200);
  light.position.set(50, 50, 50);
  light.castShadow = true
  scene.add(light);

  const boxGeometry = new THREE.SphereGeometry(25, 30, 16)
  const basicMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x222222,
    wireframe: true
  })
  const cube = new THREE.Mesh(boxGeometry, basicMaterial);
  cube.castShadow = true
  cube.rotation.set(Math.PI * .3, 0, 0)

  scene.add(cube);

  const group = new THREE.Group()
  group.add(cube)
  group.rotation.set(0, 0, -Math.PI * .25)
  scene.add(group)

  const clock = new THREE.Clock()

  raycaster.value = new THREE.Raycaster()
  pointer.value = new THREE.Vector2()

  renderer.value.render(scene, camera.value)

  animate(clock, scene, cube)

  const onWindowResize = () => {
    setSize()

    camera.value.aspect = width.value / height.value
    camera.value.updateProjectionMatrix()

    renderer.value.setSize(width.value, height.value)
  }

  const onPointerMove = (event: PointerEvent) => {
    pointer.value.x = (event.layerX / (renderArea.value?.offsetWidth || 0)) * 2 - 1;
    pointer.value.y = (event.layerY / (renderArea.value?.offsetHeight || 0)) * 2 + 1;

    group.rotation.set(pointer.value.y / 10, pointer.value.x / 10, -Math.PI * .25)
  }

  window.addEventListener('resize', onWindowResize, {passive: true})
  renderArea.value?.addEventListener('pointermove', onPointerMove);

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onWindowResize)
    cancelAnimationFrame(animationID)
  })
}


const animate = (clock,
                 scene,
                 cube) => {
  cube.rotation.y += 0.001

  raycaster.value.setFromCamera(pointer.value, camera.value);
  renderer.value.render(scene, camera.value)

  animationID = requestAnimationFrame(() => animate(clock, scene, cube))
}
</script>

<style scoped>

</style>