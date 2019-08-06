$('#save').click(function(){
			var element=$('#element').get(0);
			var width="800";
			var height="500";
			var type="png";
			var fileName="htmlToImg";
			html2canvas( element, { logging: true, letterRendering: 1, allowTaint: false, useCORS: true } ).then(canvas => { 

					var canvasWidth=canvas.width;
					var canvasHeight=canvas.height;
					var img=Canvas2Image.convertToImage(canvas,canvasWidth,canvasHeight);
					Canvas2Image.saveAsImage(canvas,width,height,type,fileName);


			})
			

		})