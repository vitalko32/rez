import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchRezume} from "../store/action-creators/rezume";
import {useLocation} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import Loader from "./Loader";
import c from '../index.module.scss'
import classes from './Rezume.module.scss'

const Rezume : React.FC = () : JSX.Element => {
    const [state, setState]= useState(null)
    const {rezume, error, loading} = useTypedSelector(state => state.rezume)
    const {repos, errorR, loadingR} = useTypedSelector(state => state.repo)
    const locate = useLocation()
    const {fetchRezume} = useActions()
    const {fetchRepos} = useActions()
    function arrayCountValues (arrO) {
        let arr = []
        if(!arrO.length) return null
        arrO.map(i => {
            arr.push(i.language)
        })
        var v, freqs = {};

        for (var i = arr.length; i--; ) {
            v = arr[i];
            if (freqs[v]) freqs[v] += 1;
            else freqs[v] = 1;
        }
        setState(Object.entries(freqs))
        return freqs;
    }
    useEffect(() => {
        fetchRepos(locate.pathname.split('/')[1])
        fetchRezume(locate.pathname.split('/')[1])
    }, [])

    useEffect(() => {
        if(repos !== null) {
            arrayCountValues(repos)
        }
    }, [repos])
    return (
        <div className={c.container}>
            {rezume !== null && loading === false && repos !== null ?
                <div className={classes.rezume}>
                    <p className={classes.item}>
                        Name: {rezume.login}
                    </p>
                    <p className={classes.item}>
                        Followers: {rezume.followers}
                    </p>
                    <p className={classes.item}>
                        Site: {rezume.blog === "" ? "empty" : rezume.blog}
                    </p>
                    <p className={classes.item}>
                        Public Repos: {rezume.public_repos}
                    </p>
                    <br/>
                    {
                        state !== null ? state.map(i => {
                           return (
                               <p>{ i[0]}: {i[1]}</p>
                           )
                        }) : ""
                    }
                    <br/>
                    {
                        repos !== null ? repos.map(i => {
                            return (
                                <div>
                                    <p>Name: {i.name}</p>
                                    <a href={i.html_url}>Url: {i.html_url}</a>
                                    <p>Time: {i.created_at} - {i.pushed_at} </p>
                                    <p>Language: {i.language}</p>
                                    <br/>
                                </div>
                            )
                        }) : ""
                    }

                </div>
                : <Loader/>}
        </div>
    );
};

export default Rezume ;