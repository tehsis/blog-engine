package com.nodeux.dpatterns.creational.builder;

public class Sandwich {

    public static class Builder {
        private String typeOfBread;
        private String toppings;
        private String condiments;
        private String typeOfMeat;

        public Builder bread(String typeOfBread) {
            this.typeOfBread = typeOfBread;
            return this;
        }

        public Builder toppings(String toppings) {
            this.toppings = toppings;
            return this;
        }

        public Builder condiments(String condiments) {
            this.condiments = condiments;
            return this;
        }

        public Builder meat(String typeOfMeat) {
            this.typeOfMeat = typeOfMeat;
            return this;
        }

        public Sandwich build() {
            return new Sandwich(this);
        }
    }

    private String typeOfBread;
    private String toppings;
    private String condiments;
    private String typeOfMeat;

    private Sandwich(Builder builder) {
        typeOfBread = builder.typeOfBread;
        toppings = builder.toppings;
        condiments = builder.condiments;
        typeOfMeat = builder.typeOfMeat;
    }

    public String getTypeOfBread() {
        return typeOfBread;
    }

    public String getToppings() {
        return toppings;
    }


    public String getCondiments() {
        return condiments;
    }

    public String getTypeOfMeat() {
        return typeOfMeat;
    }

}
