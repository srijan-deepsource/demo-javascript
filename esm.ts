let x: any = 1

if (x == null && typeof x == 'number') {
  x = 2
}

const f = <T>(x: T) => x
f(x == null)
f((x == null) || false)
f(x == null || false)
export const c = (x != null) && (x == null) && (x != null)
x = x == null == null == undefined == false 

export default x
