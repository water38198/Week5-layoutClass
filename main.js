import './assets/scss/all.scss';
import * as bootstrap from 'bootstrap'

    ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .catch( error => {
            console.error( error );
        } );