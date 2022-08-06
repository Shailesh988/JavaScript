const set = new Set([1,2,3,4,"shaileh","bhatt"])
console.log(set);
set.add("vinay")
set.delete(4)
console.log(set.has("vinay"));
// set.clear()
for(const item of set){
console.log(item);
}
