export function titleCase(title: string) {
    let data = title.split('-')
    let newValue = []
    for (let i of data) {
      newValue.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    return newValue.join(" ")
  }
  