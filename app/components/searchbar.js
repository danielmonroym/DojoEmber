import Component from '@glimmer/component';
import ENV from 'dojo-ember/config/environment';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class SearchbarComponent extends Component {

    @tracked title= "";
    @tracked img= "";
    @tracked name= "";

    get token() {
        return encodeURIComponent(ENV.OMDB_ACCESS_TOKEN);
      }
    
    get url(){
        return ENV.URL
    }
  


    
@action
 async model() {
    console.log(`${this.url}?t=${this.title}&apikey=${this.token}`);
    console.log(this.title);
    var finaltitle= encodeURI(this.title);
    console.log(finaltitle);
    console.log(`${this.url}?t=${finaltitle}&apikey=${this.token}`); 
    let response = await fetch(`${this.url}?t=${finaltitle}&apikey=${this.token}`);
    let parsed = await response.json();
    this.img=parsed.Poster;
    this.name=parsed.Title;
    console.log(parsed);
    return parsed;
 
    }

    @action
    limpiar(){
        this.title="";
        this.name="";
        this.img="";
    }

} 

