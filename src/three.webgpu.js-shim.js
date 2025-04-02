import * as THREE from 'three'

// Create a mock WebGPURenderer if you don't actually need the real implementation
export class WebGPURenderer {
  constructor() {
    console.warn('WebGPURenderer shim is being used instead of actual implementation')
    return new THREE.WebGLRenderer()
  }
}
