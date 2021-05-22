# Simple crypto mining simulator

### [DEMO PAGE](https://andy3520.github.io/simple-proof-of-work-simulator/)

```
  sha256(data, complexity) = (hash, nonce)
```

- goal: calculate which <b>nonce</b> can be combine with the <b>data</b> and
  pass through encrypt function could return the hash start with a certain
  number of <b>zero</b> equal with the <b>complexity</b>

- this simple algorithm start with <b>none = 0</b> then <b>increase</b> it
  by <b>1</b> until we got the valid hash
