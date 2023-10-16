const str = " This is a sunny day";
let ans = "";
const st = str.split(" ");

for (let i = 0; i < st.length; i++) {
  let t = st[i].split("");
  t.reverse();
  ans += t.join("") + " ";
}

console.log(ans);
