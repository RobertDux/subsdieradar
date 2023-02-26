import axios from "axios";

class SubsidieService {
    getSubsidies() {
        return axios.get('http://localhost:8081/subsidie');
    }

    getSubsidie(subsidie) {
        return axios.get(`http://localhost:8081/subsidie/${subsidie}`);
    }

    matchSubsidies(sector, thema, subsidialeActiviteit, minimaleBedrag, typeOrganisatie, projectlocatie, cofinancieren, samenwerking){
        return axios.post(
            `http://localhost:8081/match?sector=${sector}&thema=${thema}&typeActiviteit=${subsidialeActiviteit}&budget=${minimaleBedrag}&typeAanvrager=${typeOrganisatie}&projectlocatie=${projectlocatie}&bijdrage=${cofinancieren}&samenwerking=${samenwerking}`
        )
    }
}

export default new SubsidieService()