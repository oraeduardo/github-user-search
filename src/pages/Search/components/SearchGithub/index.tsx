import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Button from '../../../../core/components/Button';
import makeRequest from '../../../../core/utils/request';
import SearchResult from '../SearchResult';
import './style.scss';

type FormState = {
    avatar_url : string;
    public_repos : string,
    followers : string,
    following : string,
    company: string;
    blog: string;
    location: string;
    created_at: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const SearchGithub = () => {

    const handleOnChange = (event: FormEvent) => {
        setSearch(event.target.value);
    }

    const [isSearchResult, setIsSearchResult] = useState(false);
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<FormState>({
        avatar_url: '',
        public_repos : '',
        followers : '',
        following : '',
        company: '',
        blog: '',
        location: '',
        created_at: ''
    });

    const handleCreate = () => {
        setIsSearchResult(true);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse));
    }

    const handleGithub = () => {
        //event.preventDefault();
        fetch(`https://github.com/${search}`);
            //.then(userResponse => setUserData(userResponse));
    }

    return (
        <div className="container">
            <div className="searchgithub-content">
                <h1 className="searchgithub-text-title">
                    Encontre um perfil Github
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                value={search}
                                name="search"
                                type="text" 
                                className="form-control mb-3"
                                required
                                onChange={handleOnChange}
                                placeholder="Usuário Github"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleCreate}>
                            Encontrar
                        </button>
                    </div>
                </form>
            </div>
            
            {isSearchResult && (
                <div className="result-content">
                    
                    <div className="row">
                        <div className="col-4 mb-3">

                            <img
                                src={userData.avatar_url}
                                className=""
                                alt=""
                                height="300px"
                            />

                        </div>
                        <div className="col-8">
                            <label className="result-data">
                                Repositórios Publicos: {userData.public_repos}
                            </label>
                            <label className="result-data">
                                Seguidores: {userData.followers}
                            </label>
                            <label className="result-data">
                                Seguindo: {userData.following}
                            </label>
                            <div className="result-data1">
                                <h2 className="result-inf">
                                    Informações
                                </h2>
                                <label className="form-control mb-2">
                                    Empresa: {userData.company}
                                </label>
                                <label className="form-control mb-2">
                                    Website/Blog: {userData.blog}
                                </label>
                                <label className="form-control mb-2">
                                    Localidade: {userData.location}
                                </label>
                                <label className="form-control mb-2">
                                    Menbro desde: {userData.created_at}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleGithub}>
                        Encontrar
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchGithub;