import images from "./images.json";
import tagfalter from "./tagfalter.json"

import fuzzysearch from "fuzzysearch";

for (let k of Object.keys(images)) {
    const [name, deutsch] = k.split(" (");
    for (let f of tagfalter) {
        if (fuzzysearch(name.toLowerCase(), f.Name[0].toLowerCase())
            || fuzzysearch(deutsch.toLowerCase(), f.Deutsch[0].toLowerCase())) {
            if (f["_images"]) {
                console.error(`dup ${name}`);
            }
            f["_images"] = images[k];
        }
    }
}

for (let f of tagfalter) {
    console.log(f["_images"]?.join("; ") ?? "");
}