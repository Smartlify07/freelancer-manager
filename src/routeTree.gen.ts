/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/dashboard'
import { Route as AuthenticatedProjectsIndexImport } from './routes/_authenticated/projects.index'
import { Route as AuthenticatedClientsIndexImport } from './routes/_authenticated/clients.index'
import { Route as AuthenticatedProjectsCreateImport } from './routes/_authenticated/projects.create'
import { Route as AuthenticatedClientsCreateImport } from './routes/_authenticated/clients.create'
import { Route as AuthenticatedClientsClientIdImport } from './routes/_authenticated/clients.$clientId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProjectsIndexRoute = AuthenticatedProjectsIndexImport.update(
  {
    id: '/projects/',
    path: '/projects/',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

const AuthenticatedClientsIndexRoute = AuthenticatedClientsIndexImport.update({
  id: '/clients/',
  path: '/clients/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProjectsCreateRoute =
  AuthenticatedProjectsCreateImport.update({
    id: '/projects/create',
    path: '/projects/create',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedClientsCreateRoute = AuthenticatedClientsCreateImport.update(
  {
    id: '/clients/create',
    path: '/clients/create',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

const AuthenticatedClientsClientIdRoute =
  AuthenticatedClientsClientIdImport.update({
    id: '/clients/$clientId',
    path: '/clients/$clientId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/clients/$clientId': {
      id: '/_authenticated/clients/$clientId'
      path: '/clients/$clientId'
      fullPath: '/clients/$clientId'
      preLoaderRoute: typeof AuthenticatedClientsClientIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/clients/create': {
      id: '/_authenticated/clients/create'
      path: '/clients/create'
      fullPath: '/clients/create'
      preLoaderRoute: typeof AuthenticatedClientsCreateImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/projects/create': {
      id: '/_authenticated/projects/create'
      path: '/projects/create'
      fullPath: '/projects/create'
      preLoaderRoute: typeof AuthenticatedProjectsCreateImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/clients/': {
      id: '/_authenticated/clients/'
      path: '/clients'
      fullPath: '/clients'
      preLoaderRoute: typeof AuthenticatedClientsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/projects/': {
      id: '/_authenticated/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof AuthenticatedProjectsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRoute
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute
  AuthenticatedClientsClientIdRoute: typeof AuthenticatedClientsClientIdRoute
  AuthenticatedClientsCreateRoute: typeof AuthenticatedClientsCreateRoute
  AuthenticatedProjectsCreateRoute: typeof AuthenticatedProjectsCreateRoute
  AuthenticatedClientsIndexRoute: typeof AuthenticatedClientsIndexRoute
  AuthenticatedProjectsIndexRoute: typeof AuthenticatedProjectsIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRoute,
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
  AuthenticatedClientsClientIdRoute: AuthenticatedClientsClientIdRoute,
  AuthenticatedClientsCreateRoute: AuthenticatedClientsCreateRoute,
  AuthenticatedProjectsCreateRoute: AuthenticatedProjectsCreateRoute,
  AuthenticatedClientsIndexRoute: AuthenticatedClientsIndexRoute,
  AuthenticatedProjectsIndexRoute: AuthenticatedProjectsIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/clients/$clientId': typeof AuthenticatedClientsClientIdRoute
  '/clients/create': typeof AuthenticatedClientsCreateRoute
  '/projects/create': typeof AuthenticatedProjectsCreateRoute
  '/clients': typeof AuthenticatedClientsIndexRoute
  '/projects': typeof AuthenticatedProjectsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/clients/$clientId': typeof AuthenticatedClientsClientIdRoute
  '/clients/create': typeof AuthenticatedClientsCreateRoute
  '/projects/create': typeof AuthenticatedProjectsCreateRoute
  '/clients': typeof AuthenticatedClientsIndexRoute
  '/projects': typeof AuthenticatedProjectsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/_authenticated/dashboard': typeof AuthenticatedDashboardRoute
  '/_authenticated/profile': typeof AuthenticatedProfileRoute
  '/_authenticated/clients/$clientId': typeof AuthenticatedClientsClientIdRoute
  '/_authenticated/clients/create': typeof AuthenticatedClientsCreateRoute
  '/_authenticated/projects/create': typeof AuthenticatedProjectsCreateRoute
  '/_authenticated/clients/': typeof AuthenticatedClientsIndexRoute
  '/_authenticated/projects/': typeof AuthenticatedProjectsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/signup'
    | '/dashboard'
    | '/profile'
    | '/clients/$clientId'
    | '/clients/create'
    | '/projects/create'
    | '/clients'
    | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/signup'
    | '/dashboard'
    | '/profile'
    | '/clients/$clientId'
    | '/clients/create'
    | '/projects/create'
    | '/clients'
    | '/projects'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/login'
    | '/signup'
    | '/_authenticated/dashboard'
    | '/_authenticated/profile'
    | '/_authenticated/clients/$clientId'
    | '/_authenticated/clients/create'
    | '/_authenticated/projects/create'
    | '/_authenticated/clients/'
    | '/_authenticated/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/login",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard",
        "/_authenticated/profile",
        "/_authenticated/clients/$clientId",
        "/_authenticated/clients/create",
        "/_authenticated/projects/create",
        "/_authenticated/clients/",
        "/_authenticated/projects/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/clients/$clientId": {
      "filePath": "_authenticated/clients.$clientId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/clients/create": {
      "filePath": "_authenticated/clients.create.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/projects/create": {
      "filePath": "_authenticated/projects.create.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/clients/": {
      "filePath": "_authenticated/clients.index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/projects/": {
      "filePath": "_authenticated/projects.index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
