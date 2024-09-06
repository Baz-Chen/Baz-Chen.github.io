---
outline: deep
---

### 剪切板兼容
```js
const copyText = (text: string) => {
  return new Promise(resolve => {
    if (navigator.clipboard?.writeText) {
      return resolve(navigator.clipboard.writeText(text))
    }
    // 创建输入框
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    // 隐藏此输入框
    textarea.style.position = 'absolute'
    textarea.style.clip = 'rect(0 0 0 0)'
    // 赋值
    textarea.value = text
    // 选中
    textarea.select()
    // 复制
    document.execCommand('copy', true)
    textarea.remove()
    return resolve(true)
  })
}
```

### a标签下载
```js
const downloadByTag = (fileName, url) => {
  const a = document.createElement('a')
  if (fileName) {
    a.download = fileName
  }
  a.href = url
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
```
