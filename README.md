# Source Template from Hicetnunc team

This starter pack based on [Hicetnunc Shader Template](https://github.com/hicetnunc2000/hicetnunc/tree/main/templates/html-shader-template). You can use the special variables to detect some meta information from [hicetnunc](https://www.hicetnunc.xyz/objkt/24115).

```javascript
const creator = new URLSearchParams(window.location.search).get('creator')
// if the viewer is not authenticated to a wallet, this value will be false
const viewer = new URLSearchParams(window.location.search).get('viewer')
```

But! There is a problem. You can't get this infromation until you mint an OBJKT. So you can setup development environments to mock creator and viewer meta data:

1. Go to:
```

```
