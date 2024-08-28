
document.getElementById('uploadButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (password === 'C4TALYST') {
        document.getElementById('fileInput').click();
    } else {
        alert('Incorrect password');
    }
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            document.getElementById('gallery').appendChild(imgElement);
        }
        reader.readAsDataURL(file);
    }
});
