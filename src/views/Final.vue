<template>
  <div>
    <h3>
      A więc pora nauczyć się czegoś o budowie stron internetowych. Przeglądarki
      internetowe udostępniają narzędzia pozwalające "podejrzeć" z czego składa
      się strona, na której jesteście. Jest tam też wiele innych przydatnych dla
      programistów i programistek informacji. Wy jednak będziecie tam szukać
      wskazówek.

      <br /><br />
      Aby dostać się do "Narzędzi dla programistów" należy wcisnąć kombinację
      klawiszy Ctrl + Shift + I.
    </h3>

    <input v-model="password" placeholder="Podaj hasło" />
  </div>
</template>

<script>
export default {
  name: "Final",
  data() {
    return {
      password: "",
    };
  },
  methods: {},
  watch: {
    // whenever question changes, this function will run
    password: function (newPassword, oldPassword) {
      if (newPassword.toLowerCase() == "wardach") {
        console.error("Nagroda czeka na Was w świetlicy pod stołem.");
      }
    },
  },
  created() {
    console.log(
      "Gdybyśmy nie byli ostrożni moglobyście tutaj zobaczyć odpowiedzi do wszystkich zagadek jakie Wam do tej pory zadaliśmy"
    );
    console.log("Właściwie jak dobrze poszukacie to znajdziecie :D ");
    console.log("Hasło to nazwisko Pani dyrektor");
  },
};
</script>
