function log(strategy) {
    strategy.handle()
}

log(new class{
    handle(){
        console.log('my name is zohaib');
    }
});