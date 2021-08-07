import React, { Component } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from './MyUploadAdapter'


function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      // 第二个参数设置上传图片的地址
      return new MyUploadAdapter( loader, 'http://localhost:3001/travelNotesEditor' );
    };
  }


class DefaultCKEditor extends Component {

  componentDidMount() {
    this.init();
  }
  
  init = () => {
    ClassicEditor
        .create( document.querySelector( '#editor' ),{
        
        image: {
            toolbar: [
            'imageTextAlternative', '|',
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight'
            ],
            styles: [
            'full',
            'alignLeft',
            'alignRight'
            ]
        },
        extraPlugins: [ MyCustomUploadAdapterPlugin ] 
        })

        .then( editor => {
          
        } )
        .catch( error => {} );
  }


  render() {
    return (
      <textarea name="content" id="editor">

      </textarea>
    )
  }
}

export default DefaultCKEditor
