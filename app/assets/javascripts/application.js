// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require froala_editor.min.js
//= require plugins/align.min.js
//= require plugins/char_counter.min.js
//= require plugins/code_beautifier.min.js
//= require plugins/code_view.min.js
//= require plugins/colors.min.js
//= require plugins/emoticons.min.js
//= require plugins/entities.min.js
//= require plugins/file.min.js
//= require plugins/font_family.min.js
//= require plugins/font_size.min.js
//= require plugins/fullscreen.min.js
//= require plugins/image.min.js
//= require plugins/image_manager.min.js
//= require plugins/inline_style.min.js
//= require plugins/line_breaker.min.js
//= require plugins/link.min.js
//= require plugins/lists.min.js
//= require plugins/paragraph_format.min.js
//= require plugins/paragraph_style.min.js
//= require plugins/quote.min.js
//= require plugins/save.min.js
//= require plugins/table.min.js
//= require plugins/url.min.js
//= require plugins/video.min.js


      // $(function() {
      //   $.FroalaEditor.DefineIcon('saveSelection', {NAME: 'download'});
      //   $.FroalaEditor.RegisterCommand('saveSelection', {
      //     title: 'Info',
      //     focus: true,
      //     undo: false,
      //     refreshAfterCallback: false,
      //     callback: function () {
      //       this.selection.save();
      //       alert('selection saved');
      //     }
      //   });

      //   $.FroalaEditor.DefineIcon('restoreSelection', {NAME: 'upload'});
      //   $.FroalaEditor.RegisterCommand('restoreSelection', {
      //     title: 'Info',
      //     focus: true,
      //     undo: false,
      //     refreshAfterCallback: false,
      //     callback: function () {
      //       this.selection.restore();
      //     }
      //   });

      //   $.FroalaEditor.DefineIcon('clearSelection', {NAME: 'trash'});
      //   $.FroalaEditor.RegisterCommand('clearSelection', {
      //     title: 'Info',
      //     focus: true,
      //     undo: false,
      //     refreshAfterCallback: false,
      //     callback: function () {
      //       this.selection.clear();
      //     }
      //   });

      //   $('#froala-editor').froalaEditor({
      //     toolbarButtons: [
      //       'saveSelection', 'restoreSelection', 'clearSelection'
      //     ]
      //   });
      // });

      // $(function() {
      //   $('#froala-editor').froalaEditor({
      //     toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
      //     fontFamilySelection: true,
      //     fontSizeSelection: true,
      //     paragraphFormatSelection: true,
		    //   heightMin: 250,
      //   });
      // });

      $(function() {
        $('#froala-editor')
          .on('froalaEditor.initialized', function (e, editor) {
            editor.events.bindClick($('body'), 'a#get-text', function () {
              console.log(editor.html.get());
              $.ajax({
              	type: "POST",
              	url: "/posts",
              	data: { post: {content: editor.html.get()}},
              	success: function(data){
              		console.log(data);              		
              	},
              	error: function(data){
              		console.log(data);
              	}            	
              });
            });
          })
          .froalaEditor({
          toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
          fontFamilySelection: true,
          fontSizeSelection: true,
          paragraphFormatSelection: true,
		      heightMin: 150,
	        fullPage: true
        });
      });
