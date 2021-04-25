// 1.
// 聲明式導出
// 對象的形式導出（和解構聯繫起來）

const sayBye = 'good bye';
//- error
// export sayBye;
// function b() { }
// export b;

export { sayBye };

// 2.
export function sayByeFn() {
  return 'good bye, function!';
}

// 3.
export default function () {
  return 'good bye, default function!'
}