import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import Seo from "../components/seo"


const PortfolioPage = () => (
  <Layout>
    <Seo title="Portfoilio" />
    <h1>Portfolio</h1>
    <p>
      Some solutions to demostrate 
      how to move on the projects and
      what other enhancements can be achived.
    </p>
    <ul style={{ listStyle: "none"}} class="ml-0 pl-0">
      <li>
        <div class="card mb-3">
        <div class="card-body">
          <div class="card-title clearfix">  
            <h2 class="h5 text-dark float-left">
              RSS News
            </h2>
            <div class="float-right">
              <div class="badge badge-primary font-weight-normal">Node.js</div>
              <div class="badge badge-primary font-weight-normal ml-1">React</div>
              <div class="badge badge-primary font-weight-normal ml-1">MongoDB</div>
              <div class="badge badge-primary font-weight-normal ml-1">Elastic Search</div>
            </div>
          </div>
          <p class="text-secondary">
            News aggregation from the different news sources.
            Also apply elastic search and ML topic modeling.
          </p>
          <ul class="ml-0 pl-0">
            <li class="d-inline mr-3">
              <a href="https://github.com/ccapeng/rss-trendy"
                target="_blank" 
                title="Github"
                rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x"/>
              </a>
            </li>
            <li class="d-inline">
              <span title="Dockerify" class="text-secondary">
                <FontAwesomeIcon icon={faDocker} size="1x"/>
              </span>
            </li>
          </ul>
        </div>
        </div>
      </li>

      <li>
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-title clearfix">  
              <h2 class="h5 text-dark float-left">
                Earthquakes
              </h2>
              <div class="float-right">
                <div class="badge badge-primary font-weight-normal">Node.js</div>
                <div class="badge badge-primary font-weight-normal ml-1">MongoDB</div>
                <div class="badge badge-primary font-weight-normal ml-1">Elastic Search</div>
              </div>
            </div>
            <p class="text-secondary">
              Relay earthquake data and output as REST APIs.
            </p>
            <ul class="ml-0 pl-0">
              <li class="d-inline mr-3">
                <a href="https://github.com/ccapeng/earthquakes"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-title clearfix">
            <h2 class="h5 text-dark float-left">
              Fullstack Bookstore
            </h2>
            <div class="float-right">
            <div class="badge badge-primary font-weight-normal">Node.js</div>
              <div class="badge badge-primary font-weight-normal ml-1">Python</div>
              <div class="badge badge-primary font-weight-normal ml-1">React</div>
            </div>
            </div>
            
            <div class="text-dark mt-1 mb-1">
              <h2 class="h6">
                REST
              </h2>
              <div class="pl-3 text-secondary">
                With REST APIs, try to mix match backend and frontend.
              </div>
            </div>
            <ul class="pl-3">
              <li class="d-inline mr-3">
                <span class="text-dark mr-1">Django REST</span>
                <a href="https://github.com/ccapeng/bookstore_openapi"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li class="d-inline mr-3">
                <span class="text-dark mr-1">Flask REST</span>
                <a href="https://github.com/ccapeng/bookstore_flask_api" 
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li class="d-inline mr-3">
                <span class="text-dark mr-1">Node.js TypeORM</span>
                <a href="https://github.com/ccapeng/typeorm-bookstore" 
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li class="d-inline mr-3 text-nowrap">
                <span class="text-dark mr-1">React Redux</span>
                <a href="https://github.com/ccapeng/bookstore-hook-redux"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} title="Github" size="1x"/>
                </a>
                <span class="text-secondary ml-1" title="Dockerify">
                  <FontAwesomeIcon icon={faDocker} size="1x" />
                </span>
              </li>
              <li class="d-inline mr-3 text-nowrap">
                <span class="text-dark mr-1">React Jotai</span>
                <a href="https://github.com/ccapeng/bookstore-jotai"
                  target="_blank" 
                  title="Github"
                  class="ml-2"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>
            <h2 class="h6 text-dark mt-2 mb-1">
              GraphQL
            </h2>
            <ul class="pl-3">
              <li class="d-inline mr-3">
                <span class="text-dark mr-1">Django GraphQL</span>
                <a href="https://github.com/ccapeng/bookstore_graphql"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li class="d-inline mr-3 text-nowrap">
                <span class="text-dark mr-1">Redux GraphQL</span>
                <a href="https://github.com/ccapeng/bookstore-redux-graphql"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>

            <h2 class="h6 text-dark mt-2 mb-1">
              gRPC
            </h2>
            <ul class="pl-3">
              <li class="d-inline mr-3">
                <span class="text-dark mr-1">Django gRPC</span>
                <a href="https://github.com/ccapeng/bookstore_grpc" 
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li class="d-inline mr-3 text-nowrap">
                <span class="text-dark mr-1">Redux gRPC</span>
                <a href="https://github.com/ccapeng/bookstore-redux-grpc" 
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-title clearfix">
            <h2 class="h5 text-dark float-left">
              React Depoyment Protection
            </h2>
            <div class="float-right">
              <div class="badge badge-primary font-weight-normal">React</div>
              <div class="badge badge-primary font-weight-normal ml-1">Python</div>
            </div>
            </div>
            <p class="text-secondary">
              No url endpoint expose to public.  
              Avoid code logic leak to public.
            </p>
            <ul class="ml-0 pl-0">
              <li class="d-inline mr-3">
                <a href="https://github.com/ccapeng/bookstore_pro"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      
      <li>
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-title clearfix">
            <h2 class="h5 text-dark float-left">
              Server Side Bookstore
            </h2>
            <div class="float-right">
              <div class="badge badge-primary font-weight-normal">Python</div>
              <div class="badge badge-primary font-weight-normal ml-1">PHP</div>
            </div>
            </div>
            <p class="text-secondary">
              From the battery included framework,
              create a full stack for a quick prototype demo.
              Check my bookstore project:
              <a href="https://ccapeng.gitbook.io/bookstores"
                target="_blank" 
                class="ml-1"
                title="Gitbook"
                rel="noreferrer">
                  <FontAwesomeIcon icon={faBook} size="1x"/>
              </a>
            </p>
            <ul>
              <li>
                <span class="text-dark mr-1">Django Fullstack</span>
                <a href="https://github.com/ccapeng/django-bookstore"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
              <li>
                <span class="text-dark mr-1">PHP Laravel</span>
                <a href="https://github.com/ccapeng/laravel_bookstore"
                  target="_blank" 
                  title="Github"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <div class="card mb-3">
        <div class="card-body">
          <div class="card-title clearfix">  
            <h2 class="h5 text-dark float-left">
              HTML document with React
            </h2>
            <div class="float-right">
              <div class="badge badge-primary font-weight-normal">React</div>
            </div>
          </div>
          <p class="text-secondary">
            Put together all html documents.
          </p>
          <ul class="ml-0 pl-0">
            <li class="d-inline mr-3">
              <a href="https://github.com/ccapeng/doc-react"
                target="_blank" 
                title="Github"
                rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x"/>
              </a>
            </li>
            <li class="d-inline">
              <a href="https://doc-react.herokuapp.com/"
                target="_blank" 
                title="Demo"
                rel="noreferrer">
                  <FontAwesomeIcon icon={faPlay} size="1x"/>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </li>
      
      <li>
        <div class="card mb-3">
          <div class="card-body">
          <div class="card-title clearfix">
            <h2 class="h5 text-dark float-left">
              Workflow Diagram
            </h2>
            <div class="float-right">
              <div class="badge badge-primary font-weight-normal">React</div>
            </div>
          </div>
          <p class="text-secondary">
            Use BPMN to create quick flowchart. 
            Each node can be easy to associate with properties or form data.
          </p>
          <ul class="ml-0 pl-0">
            <li class="d-inline mr-3">
              <a href="https://github.com/ccapeng/bpmn-workflow"
                target="_blank" 
                title="Github"
                rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x"/>
              </a>
            </li>
            <li class="d-inline">
              <a href="https://bpmn-workflow.herokuapp.com/"
                target="_blank" 
                title="Demo"
                rel="noreferrer">
                <FontAwesomeIcon icon={faPlay} size="1x"/>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </li>

    </ul>

  </Layout>
)

export default PortfolioPage