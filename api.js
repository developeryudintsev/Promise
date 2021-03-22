const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need",
            { count: studentsCount });
    },
    getVacanciesCountFromMicrosoft() {
        return axios
            .get("https://microsoft.com")
            .then((res) => res.data.vacancies)
        //передаем не целый респонс от аксиос, а берем нужное поле
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com");
        //а здесь берем целый объект
    }
}