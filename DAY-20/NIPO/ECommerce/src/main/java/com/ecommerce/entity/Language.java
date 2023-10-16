package com.ecommerce.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="lang")
public class Language {
        @Id
        private int id;
        private String username;
        private String language;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getLanguage() {
            return language;
        }

        public void setPassword (String password) {
            this.language = language;
        }

        public Language(int id, String username, String language) {
            this.id = id;
            this.username = username;
            this.language = language;
        }
        public Language() {

        }
    }


