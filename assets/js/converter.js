// converter.js - Core conversion logic
function convertImage(file) {
  const conversionType = document.getElementById('conversionType').value;
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;

    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      let mimeType = conversionType === 'png' ? 'image/png' : 'image/jpeg';
      const convertedData = canvas.toDataURL(mimeType);

      // Show preview
      document.getElementById('preview').innerHTML = `<img src="${convertedData}" alt="Converted Image">`;

      // Enable download
      const downloadBtn = document.getElementById('downloadBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = convertedData;
        link.download = `converted.${conversionType}`;
        link.click();
      };
      document.getElementById('downloadSection').style.display = 'block';
    };
  };

  reader.readAsDataURL(file);
}
