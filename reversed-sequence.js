const reverseSeq  = (n = [])  => { 
        let sequental = []
        for(n; n > 0; n--) {
            sequental.push(+n)
        }
        console.log(sequental)
        return sequental

  };

  reverseSeq(5)
