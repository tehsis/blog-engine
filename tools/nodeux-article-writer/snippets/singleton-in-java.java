package com.nodeux.dpatterns.creational.singleton;

/* Lazy loading, Thread safe. */

public class SingletonV2 {

    private static volatile SingletonV2 instance = null;

    private SingletonV2() {
    }

    public static SingletonV2 getInstance() {
        if (instance == null) {
            synchronized (SingletonV2.class) {
                if (instance == null) {
                    instance = new SingletonV2();
                }
            }

        }
        return instance;
    }
}
