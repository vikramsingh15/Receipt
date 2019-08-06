$('#save').click(function(){
			var element=$('#element').get(0);
			var lebar="600";
			var tinggi="500";
			var type="jpeg";
			var fileName="htmlToImg";
			html2canvas( element, { logging: true, letterRendering: 1, allowTaint: false, useCORS: true } ).then(canvas => { 

					var canvasWidth=canvas.width;
					var canvasHeight=canvas.height;
					var img=Canvas2Image.convertToImage(canvas,canvasWidth,canvasHeight);
					Canvas2Image.saveAsImage(canvas,lebar,tinggi,type,fileName);


			})
			

		})