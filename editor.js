
// console.log("copying files")
const fs = require('fs')

copyfile("/home/einstein/Documents/azure-aks/fundamentals-declarativeApproach-k8/04-02-PODs-with-YAML/kube-manifests/02-pod-definition.yml", "02-pod-definition.yml")
function copyfile(src, destName) {
    fs.copyFileSync(src, destName)
}

console.log("done")