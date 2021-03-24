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
                                className="searchgithub-text"
                                required
                                onChange={handleOnChange}
                                placeholder="Usuário Github"
                            />
                            <br/>
                            <span className="input-group-btn">
                                <button type="submit" className='button' onClick={handleCreate}>
                                    Encontrar
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            
            {isSearchResult && (
                <div className="searchresult-content">
                    
                    <img
                        src={userData.avatar_url}
                        //className="img"
                        alt=""
                        height="300px"
                    />
                    <label className="data">
                        Repositórios Publicos: {userData.public_repos}
                    </label>
                    <label className="data">
                        Seguidores: {userData.followers}
                    </label>
                    <label className="data">
                        Seguindo: {userData.following}
                    </label>

                    <input
                        value={userData.company}
                        name="company"
                        type="text" 
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do produto"
                    />
                    <input
                        value={userData.blog}
                        name="blog"
                        type="text" 
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do produto"
                    />
                    <input
                        value={userData.location}
                        name="location"
                        type="text" 
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do produto"
                    />
                    <input
                        value={userData.created_at}
                        name="created_at"
                        type="text" 
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do produto"
                    />


                    <div className="row">
                        <div className="col-md-4 vercoluna searchresult-data">
                            
                            <img
                                src={userData.avatar_url}
                                //className="img"
                                alt=""
                                height="300px"
                            />
                            
                        </div>
                        <div className="col-6 vercoluna searchresult-data">
                        <div className="col-3 vercoluna">
                            <label className="data">
                                Repositórios Publicos: {userData.public_repos}
                            </label>
                        </div>
                        <div className="col-2 vercoluna">
                            <label className="data">
                                Seguidores: {userData.followers}
                            </label>
                        </div>
                        <div className="col-2 vercoluna">
                            <label className="data">
                                Seguindo: {userData.following}
                            </label>
                        </div>
                        </div>


                        <div className="searchresult-data1">
                                        <input
                                            value={userData.public_repos}
                                            name="public_repos"
                                            type="text" 
                                            className="form-control mb-5"
                                            onChange={handleOnChange}
                                            placeholder="Nome do produto"
                                        />
                                        <input
                                            value={userData.followers}
                                            name="followers"
                                            type="text" 
                                            className="form-control mb-5"
                                            onChange={handleOnChange}
                                            placeholder="Nome do produto"
                                        />
                                        <input
                                            value={userData.following}
                                            name="following"
                                            type="text" 
                                            className="form-control mb-5"
                                            onChange={handleOnChange}
                                            placeholder="Nome do produto"
                                        />
                        </div>


                        <div className="searchresult-data2">
                                    <input
                                        value={userData.company}
                                        name="company"
                                        type="text" 
                                        className="form-control mb-5"
                                        onChange={handleOnChange}
                                        placeholder="Nome do produto"
                                    />
                                    <input
                                        value={userData.blog}
                                        name="blog"
                                        type="text" 
                                        className="form-control mb-5"
                                        onChange={handleOnChange}
                                        placeholder="Nome do produto"
                                    />
                                    <input
                                        value={userData.location}
                                        name="location"
                                        type="text" 
                                        className="form-control mb-5"
                                        onChange={handleOnChange}
                                        placeholder="Nome do produto"
                                    />
                                    <input
                                        value={userData.created_at}
                                        name="created_at"
                                        type="text" 
                                        className="form-control mb-5"
                                        onChange={handleOnChange}
                                        placeholder="Nome do produto"
                                    />
                                </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchGithub;