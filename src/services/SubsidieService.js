class SubsidieService {
    constructor() {
        this.apiEndpoint = process.env.VUE_APP_API_ENDPOINT;
    }

    getSubsidies() {
        return fetch(this.apiEndpoint + '/subsidie');
    }

    getSubsidie(subsidie) {
        return fetch(this.apiEndpoint + `/subsidie/${subsidie}`);
    }

    matchSubsidies(sector, thema, subsidialeActiviteit, minimaleBedrag, typeOrganisatie, projectlocatie, cofinancieren, samenwerking){
        return fetch(
            this.apiEndpoint + `/match?sector=${sector}&thema=${thema}&typeActiviteit=${subsidialeActiviteit}&budget=${minimaleBedrag}&typeAanvrager=${typeOrganisatie}&projectlocatie=${projectlocatie}&bijdrage=${cofinancieren}&samenwerking=${samenwerking}`,
            {
                method: "POST"
            }
        )
    }
}

export default new SubsidieService()