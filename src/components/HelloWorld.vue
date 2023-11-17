<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="navbar">
          <div class="logo">
            <img
              style="width: 30px; margin-right: 5px"
              src="../assets/logo.png"
            />
            seventeen space
          </div>
          <div class="others">
            <el-input
              class="search"
              v-model="input"
              placeholder="暂时没什么用噢"
            >
              <template #append>
                <el-button @click="() => {}">
                  <el-icon><Search /></el-icon
                ></el-button>
              </template>
            </el-input>
            <div class="item">
              <el-icon class="icon"><Search /></el-icon>
              <div class="text">哆</div>
            </div>
            <div class="item">
              <el-icon class="icon"><Search /></el-icon>
              <div class="text">啦</div>
            </div>
            <div class="item">
              <el-icon class="icon"><Search /></el-icon>
              <div class="text">咪</div>
            </div>
            <div class="item">
              <el-icon class="icon"><Search /></el-icon>
              <div class="text">法</div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="padding: 0">
        <div class="test">Thirty</div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup></script>

<style lang="scss">
.head {
  background-color: #fff;
  border-bottom: #dcdfe6 solid;
  border-radius: 0.1em;
  display: flex;
  align-items: center;
  .navbar {
    margin: 0 8vw;
    width: 80%;
    display: flex;
    justify-content: space-between;
    .logo {
      opacity: 0;
      font-size: 20px;
      color: #409eff;
      animation: leftout 1s ease 1 normal forwards;
    }
    .others {
      display: flex;
      justify-content: center;
      align-items: center;
      .search {
        width: 150%;
        transition: 1s ease all;
      }
      .item {
        cursor: default;
        margin-left: 20px;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        .icon {
          text-align: center;
        }
        .text {
          color: #409eff;
        }
      }
      .item:hover {
        .icon {
          animation: upout 400ms linear 1 normal forwards;
        }
      }
    }
  }
}

@keyframes leftout {
  from {
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes upout {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(0px);
  }
}
.test {
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100vh;
  margin: 0 10%;
  background: url(https://cdn.jsdelivr.net/gh/senventeen/picx-images-hosting@private/myphoto/image.6ewciyzw33w0.webp)
    no-repeat center center;
  background-size: cover;
  align-items: center;
  font-size: 5em;
  font-weight: bold;
  /* text-shadow: 0.04em 0.04em 0.08em #1cccff, 0 0 0.08em #61c3f4; */
  color: #fff;
  animation: breather 1s ease infinite alternate;
}
@keyframes breather {
  from {
    text-shadow: 0 0 0.01em #051947;
  }
  to {
    text-shadow: 0 0 0.3em #051947;
  }
}
</style>
