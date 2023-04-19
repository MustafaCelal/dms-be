import { Injectable } from '@nestjs/common';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dealer } from './entities/dealer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealerService {
  constructor(
    @InjectRepository(Dealer) private readonly dealerRepository:Repository<Dealer>
  ){}

  create(createDealerDto: CreateDealerDto) {
    return this.dealerRepository.save(createDealerDto);
  }

  findAll() {
    return this.dealerRepository.find();
  }

  findOne(id: number) {
    return this.dealerRepository.findOneBy({id});
  }

  update(id: number, updateDealerDto: UpdateDealerDto) {
    return this.dealerRepository.update(id,updateDealerDto);
  }

  remove(id: number) {
    return this.dealerRepository.delete(id);
  }
}
