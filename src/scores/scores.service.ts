import { Injectable } from '@nestjs/common';
import { scoresDto } from './dto/scores.dto.js';

@Injectable()
export class ScoresService {
    calculateAverage(dto: scoresDto){
        let scores = [80, 90, 75, 60, 88]
        let passMark = 70
        let count = scores.length
        let highest = Math.max(...scores)
        let lowest = Math.min(...scores)
        let passed = 0
        let failed = 0

        //count average
        let sum = scores.reduce((acc, val) => acc + val, 0)
        let average = sum / scores.length

        for(let i = 0; i < scores.length; i++){
            if(scores[i] > dto.passmark){
                passed++
            }
            else{
                failed++
            }
        }
        
        return {
            success: true,
            message: "Score summary calculated",
            data: {
                count: count,
                average: average,
                highest: highest,
                lowest: lowest,
                passMark: passMark,
                passed: passed,
                failed: failed
  }
        }
    }
}
