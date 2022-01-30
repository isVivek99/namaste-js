function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
// console.log(b);
//steps of execution:
//1. GEC is pushed on call-stack
//2. a() is assigned memory in call stack
//3. since a() is called, EC for `a` is pushed on call stack
//4. var b and func c() are given memory
//5. b is assigned value
//6. call to c() hence its EC is pushed on callstack
// since lexical_env = local_memory + lexical_env_of_parent
//func c()'s lexical_env = its local memory + local_memory_func_a() + global_memory
//7. hence we can access b from func c() but cannot access it from outside
