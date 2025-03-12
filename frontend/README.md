# Vitamin Monorepo Frontend

본 프로젝트는 React 를 심도있게 공부하기 위한 프로젝트입니다.

## 1. 프로젝트 구조도

```mermaid

  flowchart TB

    A@{shape: circle, label: "User"} --> |①| B@{shape: rect, label: "ROUTER INTERCEPTOR"}
    B --> |②| C@{shape: rect, label: "ROUTER"}

    subgraph Frontend
      direction TB

      J@{shape: rect, label: "PAGE"} --> K@{shape: rect, label: "FORM"}
      K --> L@{shape: rect, label: "유효성 체크"}
      L --> M@{shape: rect, label: "EVENT"}

      subgraph FSD
        direction LR

        FA@{shape: rect, label: APP} --> FB@{shape: rect, label: PAGES}
        FB --> FC@{shape: rect, label: WIDGETS}
        FC --> FD@{shape: rect, label: FEATURES}
        FD --> FE@{shape: rect, label: ENTITIES}
        FE --> FF@{shape: rect, label: SHARED}

      end
    end

    subgraph Backend
      direction TB

      BA@{shape: rect, label: Request} --> | ⓐ | BB@{shape: rect, label: Interceptor Middleware}
      BB --> | ⓑ | BC@{shape: rect, label: ROUTER}
      BC --> | ⓒ | BD@{shape: rect, label: SERVICE}
      BD --> | ⓓ | BE@{shape: rect, label: "REQUEST SCHEMA"}
      BE --> | ⓔ | BF@{shape: rect, label: MAPPER}
      BF --> | ⓕ | BG@{shape: rect, label: MODEL}

      BG --> | ⓘ | BF
      BF ---> | ⓙ | BH@{shape: rect, label: "RESPONSE SCHEMA"}
      BH --> | ⓚ | BD
      BD --> | ⓛ | BC
      BC --> | ⓜ | BB
      BB ----> | ⓝ | BI@{shape: rect, label: RESPONSE}

    end

    BG --> | ⓖ | DATABASE@{shape: cyl, label: DATABASE}
    DATABASE --> | ⓗ | BG

    J --> FSD

    C ---> | ③ /sec/ | Frontend
    C ---> | ③ /no sec/ | Frontend


    subgraph "Tanstak-Query"
      direction TB

      E@{shape: rect, label: "TanstackQuery"}
      E --> |⑤| F@{shape: rect, label: "Request Adaptor"}
      F --> |⑥| G@{shape: rect, label: "Axios"}
      G --> |⑨| I@{shape: rect, label: "Response Adaptor"}
      I --> |⑩| E
    end

    M --> |④| E
    G --> |⑦| BA
    BI --> |⑧| G
    E --> |⑪| M

    subgraph FE-Vitamin-Ui
      direction TB

      VUA@{shape: rect, label: ATOMS} --> VUB@{shape: rect, label: MOLECULE}
      VUB --> VUC@{shape: rect, label: ORGANISM}
      VUC --> VUD@{shape: rect, label: TEMPLAGE}
    end

    subgraph FE-Vitamin-Core
      direction TB

      VCA@{shape: rect, label: CORE}
    end

    VUC --> J
    VUD --> J

    FE-Vitamin-Core --> FE-Vitamin-Ui
    FE-Vitamin-Core --> Client

```


# 2. 프로젝트 사용 버전 정보

- Node.js 버전 20.15.0 이상 사용하며, 현 프로젝트는 22.11.0 버전을 사용.

  > node --version

- pnpm 버전은 10.0.0 이상 사용하며, 현 프로젝트는 10.4.1 버전을 사용.

  > pnpm --version

- react 버전은 19.0.0 이상 사용.

  > pnpm list react

# 3. 프로젝트 구조

본 프로젝트는 아래와 같은 구조로 이루어져 있습니다.

## 3.1 프로젝트 생성

- React Monorepo 프로젝트 생성

  > ./react_base_monorepo.sh

  ![](./readmeImages/2024-12-07-14-44-40.png)

## 3.2 apps 프로젝트 생성

  > cd apps

  > pnpm create vite@latest vitaminstudio

  ![](./readmeImages/2025-02-22-09-30-35.png)

  > cd vitaminstudio

  > pnpm install

  ![](./readmeImages/2025-02-22-09-32-29.png)

-  트러블 슈팅

  - Ignored build scripts: esbuild.

    ![](./readmeImages/2025-02-22-08-54-53.png)

    > pnpm approve-builds

    ![](./readmeImages/2025-02-22-09-28-08.png)


## 3.3 packages 프로젝트 생성

- vitamin-core 프로젝트 생성
  > cd packages

  > pnpm create vite@latest vitamin-core

  ![](./readmeImages/2025-02-22-09-44-45.png)

  > cd vitamin-core

  > pnpm install

  ![](./readmeImages/2025-02-22-09-46-05.png)

- vitamin-ui 프로젝트 생성
  > mkdir vitamin-ui

  > cd vitamin-ui

  > pnpm dlx storybook@latest init --builder @storybook/builder-vite

  ![](./readmeImages/2025-02-22-09-48-04.png)

  - 주의
    - storybook 처음 생성을 하면 **attention** 문구가 나오는데 이 문구를 없애려면 아래와 같이 한다.
      ![](./readmeImages/2025-02-22-14-16-33.png)

    > vi .env
      ```env
        VITE_DISABLE_TELEMETRY=true
      ```

