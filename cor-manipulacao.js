function start(img) {
    createImageBitmap(img).then(bmp => {
    //c = document.querySelector("canvas");
    //ctx = c.getContext("bitmaprenderer");
    //ctx.transferFromImageBitmap(bmp);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); alert('aqui')

    const data = imageData.data; alert('aqui')

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    const canva = document.getElementById("canvasb"); 
    const ctxo = canva.getContext("2d");
    ctx.putImageData(imageData, 0, 0);


  });
}