import Route from '@ember/routing/route';

export default class ApiRoute extends Route {
    


    model(){
        var url = "https://cat-fact.herokuapp.com/facts";
        
        this.get(url, ()=>{

            return [];

        })

    }
}
