### rc-lazy-image

#### introduction

    lazy load your image and show custom info when image is loading or fail to load.

#### install

```
npm install rc-lazy-image

```

#### useage

```
import LazyImage from "rc-lazy-image";
export default function Demo(props) {
    return (
          <ImageSelf
                src={item.thumb}
                defaultWidth="32%"
                lazy
                defaultHeight="70px"
                            />
    )
}
```

#### props

```
    src (String) : source of img element
    defaultHeight (String) :default height of img element
    defaultWidth (String) :default width of img element
    lazy (Boolean) :whether lazy load this img or not
    loadingSlot (String | HTML Element) :the  info when img is loading
    errorSlot (String | HTML Element) : the info when loading img fail
    style (String) :the style of img
    alt (String) :the alt attribute of img

```
