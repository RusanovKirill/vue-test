<template>
	<div>
		<div class="header__under--header">
							<div class="header__title">
								Build ID
							</div>
							<div class="header__title">
								Platform
							</div>
							<div class="header__title">
								Quest name
							</div>
						</div>
			<div 
				v-for="el in post"
				:key="el.id"
			>
					<div class="header__wrap--header">
						<div class="header__content">
							<div class="header__content--item">
								{{el.globalId}}
							</div>
							<div class="header__content--item">
								{{el.platform}}
							</div>
							<div class="header__content--item">
								{{el.name}}
							</div>
						</div>
			</div>
		</div>
		<br>
		<div class="pathway__title">
			<div class="pathway__colums">
				Status
			</div>
			<div class="pathway__colums">
				Path name
			</div>
			<div class="pathway__colums">
				Leafs info
			</div>
		</div>
			<div 
				v-for="elem in post"
				:key="elem.alias+elem.id"
			>
				<div class="pathway">
					<div class="pathway__header">
						<div class="pathway__content" >
							<div class="pathway__elem">{{elem.pathway.status}}</div>
							<div class="pathway__elem">{{elem.pathway.name}}</div>
							<div class="pathway__elemarray">
								<div v-for="items in elem.pathway.leafs"
									:key="items.index"
									class="pathway__items"
								>
									<div v-if="statusQuest.includes(items)" >
										 <i class="fas fa-check"></i>
									</div>
								</div>
								</div>
						</div>
					</div>
				</div>
			</div>
			<div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	props:['name'],
	 data () {
    return {
      loading: false,
      post: [],
			error: null,
			statusQuest:[]
    }
	},

  created:function(){
		this.fetchData();
		this.Quest();
  },
 
  methods: {
    fetchData () {
      this.error = []
      this.loading = true
			axios
      .get('http://localhost:3001/generalquests')
				.then(res => {
					this.post = res.data.filter((el)=>el.alias == this.name);
					
				})
				.catch( e => {
					this.error.push(e)
				})
		},
		Quest () {
			this.error = []
			axios
				.get('http://localhost:3001/finishedquest')
					.then(el => {
						this.statusQuest = el.data.filter((item) => (item.questId == this.post[0].id))
						this.statusQuest = this.statusQuest.map(el => el.name);
					})
					.catch( e => {
						this.error.push(e)
					})
		}
  }
}
</script>

<style scope>
.header__under--header{
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	border-bottom: 1px solid #000;
}
.header__title{
	width: 33.3333%;
	text-align: center;
	font-size: 18px;
	font-weight: 900;
	color: #000;
}
.header__content {
	display: flex;
	width: 100%;
	margin: auto;
	margin-top: 15px;
}
.header__content--item {
	width: 33.3333%;
	text-align: center;
	font-size: 16px;
	font-weight: 300;
	color: #000;
}
.pathway__title{
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	border-bottom: 1px solid #000;
}
.pathway__colums:last-child {
	width: 70%;
	text-align: center;
	font-size: 18px;
  font-weight: 900;
}
.pathway__colums:nth-child(-n+2){
	width: 15%;
	text-align: center;
	font-size: 18px;
  font-weight: 900;
}
.pathway__content {
	display: flex;
	text-align: center;
	width: 100%;
	margin-top: 30px;
}
.pathway__elem:nth-child(-n+2){
	text-align: center;
	width: 15%;
}
.pathway__elemarray{
	display: flex;
	width: 70%;
}
.pathway__items {
	width: 33.3333%;
	text-align: center;
}
.fa-check{
	color: green;
}
</style>

