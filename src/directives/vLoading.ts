import { VNode } from 'vue'
let uid = 0
export default {
  mounted(el: HTMLElement, binding: any, vnode: VNode) {
    uid += 1
    const spinnerId = 'loading-mask-' + Date.now().toString(16) + uid.toString()
    let spinner = document.createElement('div')
    spinner.id = spinnerId
    spinner.classList.add(
      'loading-spinner',
      'bg-carlos-bg-primary',
      'h-screen',
      'text-carlos-text-secondary',
      'text-center',
      'text-sm',
      'pt-4',
      'absolute',
      'top-0',
      'w-full'
    )
    spinner.innerHTML =
      '<svg class="animate-spin h-5 w-5 mx-auto block mb-2" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'
    el.dataset.maskId = spinnerId
    el.appendChild(spinner)
  },
  updated(el: HTMLElement, binding: any) {
    const spinner = document.getElementById(String(el.dataset.maskId))
    if (spinner) spinner.style.display = binding.value ? 'block' : 'none'
  },
}
